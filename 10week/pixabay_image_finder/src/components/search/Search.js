import React, {Component} from 'react';
//going to make this a class based component//
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
//axios is HOW we are fetching from the API//
import ImageResults from '../image-results/ImageResults';

//TextField and SelectField are both being imported from material-ui//
//not making a constructor for State, defining it as a single variable//
//setting searchText into nothing by default and amount as 15 by default//
//images are an empty array to begin with until request is made and fetch to fill array//
class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl:'https://pixabay.com/api',
    apiKey:'9459538-5595a9284195db43559c07c3b',
    images:[]
};
//creating a class to link the text in when user inputs//
//using an arrow function so as a parameter it will take in an event and we'll set that to our function//
//using arrow function so that we don't have to do .bind (this)//
//we are targeting the input name and we want to set the searched text in the state to whatever the value is//
//it is important that your name matches the State name because that is where e.target.name comes in//
//will use`` in axios call because it is a template literal, we are passing in our key, using a "q" parameter//
//after that it will give us a promise... so we will use a .then and it will give us a response in res.data//
//add a .catch in case something goes wrong//
//we want to limit the amount so we will go to OnAmountChange//
onTextChange = (e) => {
  console.log('¡¡¡LINE 32 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', e.target.value)
  const val = e.target.value;
  this.setState({ [e.target.name]: e.target.value }, () => {

    if (val === '') {
      this.setState({ images: [] });
    } else {
    axios
    .get(
      `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
        this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safeSearch=true`
      )
     .then(res => this.setState({images: res.data.hits}))
     .catch(err => console.log(err));
   }
  });
};
onAmountChange = (e,index,value) => this.setState({ amount: value});
//using the TextField component from material-ui, add some properties//
//the searchText will be directly connected to that state value//
//floatingLabelText from material-ui which is just the label//
//fullWidth because I want input to go all the way across//
//Menu Items are what is displayed to the user.. same thing as Option and Value//
  render() {
    console.log(this.state.images);
    return(
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search for Images"
          fullWidth={true}
         />
         <br />
         <SelectField
         name="amount"
           floatingLabelText="Amount"
           value={this.state.amount}
           onChange={this.onAmountChange}
           >
           <MenuItem value={5} primaryText="5" />
           <MenuItem value={10} primaryText="10" />
           <MenuItem value={15} primaryText="15" />
           <MenuItem value={30} primaryText="30" />
           <MenuItem value={50} primaryText="50" />
           </SelectField>
           <br />
           {this.state.images.length > 0 ? (
             <ImageResults images={this.state.images} />
            ) : null}
           </div>
         );
       }
     }


export default Search;
