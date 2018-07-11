import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GridList,GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
//just importing exactly what we want, not entire library//
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
//we are using let because we are not defining it//
//pulling images out of this.props with {}//
//if there are images... we'll do what we do... if set the List Content...//
class ImageResults extends Component {
  state= {
    open: false,
    currentImg: ''
  };
  handleOpen = img => {
    this.setState({open: true, currentImg: img});
  };
  handleClose =() => {
    this.setState({open: false});
  };
  render() {
    let imageListContent;
    const {images} = this.props;

    if(images){
      imageListContent = (
       <GridList cols={3}>
        {images.map(img => (
          <GridTile
            title={img.tags}
          key={img.id}
          subtitle={
            <span>
            by <strong> {img.user}</strong>
            </span>
          }
          //we want to be able to click on the Icon and open up the Dialog//
          actionIcon={
            <IconButton onClick={()=> this.handleOpen(img.largeImageURL)}>
              <ZoomIn color= "pink" />
            </IconButton>
          }
        >
          <img src={img.largeImageURL} alt=""/>
        </GridTile>

      ))}
      </GridList>
    );

    } else {
      imageListContent= null;
}
const actions= [
   <FlatButton label="Close" primary={true} onClick={this.handleClose} />
];
    return (
      <div>
        {imageListContent}
        <Dialog
         actions={actions}
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}
         >
         <img src={this.state.currentImg} alt="" style={{ width: '100%'}} />
         </Dialog>
      </div>
    );
  }
}
ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};
export default ImageResults;
