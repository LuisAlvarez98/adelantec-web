import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../images/logo.png'
import { useAreas } from "../hooks/useAreas"
import { Area } from '../types';
import styled from 'styled-components'
import Cafe from '../images/cafe.jpeg'

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
        <img src={Logo} height="128" width="128"/>
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
        </ImageListItem>
        {(areas ?? []).map((item:Area, index:number) => (
        <ImageListItem key={index}>
                    <Image src={Cafe}/>
                    <ImageListItemBar
                    title={item.name + ' ' +  item.currentCapacity  + '/' + item.maxCapacity }
                    subtitle={<span> {item.description}</span>}
                    />
                </ImageListItem>
        ))}
      </ImageList>
    </div>
    </Container>
  );
}