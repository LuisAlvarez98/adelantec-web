import React, {PureComponent} from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Logo from '../images/logo.png'
import { useAreas } from "../hooks/useAreas"
import { Area } from '../types';
import styled from 'styled-components'
import Cafe from '../images/cafe.jpeg'
import { Button } from '@chakra-ui/react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme  } from 'victory';


const data = [
  {quarter: 1, earnings: 45},
  {quarter: 2, earnings: 32},
  {quarter: 3, earnings: 27},
  {quarter: 4, earnings: 36},
  {quarter: 5, earnings: 49},
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

const Container = styled.div`
  display:flex;
  flex-flow:column;
  padding:16px;
  align-items:center;
`

interface ImageProps{
    src:string;
}
 const Image = React.memo<ImageProps>(({src}) => {
    return (
        <img src={src}/>
    );
  });

export default function Home() {
  const classes = useStyles();
  const { data: areas } = useAreas();
  return (
     <Container> 
        <h1>AdelanTec</h1> 
        <img src={Logo} height="128" width="128"/>
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
        </ImageListItem>
        {(areas ?? []).map((item:Area, index:number) => (
        <ImageListItem key={index}>
                    <Image src={Cafe}/>
                    <ImageListItemBar
                    title={`${item.name} ${item.currentCapacity}/${item.maxCapacity}`}
                    subtitle={<span> {item.description}</span>}
                    actionIcon ={
                      <IconButton aria-label={`info about ${item.name}`} className={classes.icon}>
                      <InfoIcon />
                    </IconButton>
                    }
                    
                    />
                </ImageListItem>

        ))}
      </ImageList>

    </div>
    {/* <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4, 5]}
          tickFormat={["Lunes ", "Martes ", "Miércoles ", "Jueves", "Viernes"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}`)}
        />
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart> */}

    </Container>
    
  );
}