import React, { Component } from 'react';
import { Dimensions, View, } from 'react-native'
import { Searchbar, List } from 'react-native-paper';
import AppBar from '../../globalComponents/AppBar';
import { searchFunction } from './components/dataSet';
import { ScrollView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get('screen')

class Affiliations extends Component {
    constructor() {
        super()
        this.state = {
            searchQuery: ''
        }
    }

    // *Changes state when text is changed 
    onChangeSearch = (text) => {
        console.log("Text Changed")
        this.setState({
            searchQuery: text
        })

    }

    render() {
        // * VARIABLES NAMES CANNOT CHANGE
        // *For 3 lists search function FILTERS out all names that do not match with the search query
        let { t, ins, o } = searchFunction(this.state.searchQuery)

        return (
            <View style={{ flex: 1 }}>
                <View style={{ margin: 30 }}>
                    <Searchbar
                        placeholder="Search"
                        onChangeText={this.onChangeSearch}
                        value={this.state.searchQuery}
                    />
                </View>
                {/* //? Beneath commented code doesnt work because of different class rendering issues */}
                {/* <ListComponent tpaList={t} otherCompanyList={ins} insuranceCompanyList={o}/>
                {console.log("Inside Render method",t)} */}




                {/* //* Renders each list extracted */}
                <ScrollView>
                    {t.map((element, index) => (
                        // console.log(element),
                        <ScrollView horizontal style={{ minWidth: width }}>
                            <List.Item title={element} key={index} titleStyle={{ textAlign: 'auto', marginRight: width }} style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />
                        </ScrollView>

                    ))
                    }
                    {ins.map((element, index) => (
                        // console.log(element),
                        <ScrollView horizontal style={{ minWidth: width }}>
                            <List.Item title={element} key={index} titleStyle={{ textAlign: 'auto', marginRight: width }} style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />
                        </ScrollView>

                    ))
                    }
                    {o.map((element, index) => (
                        // console.log(element),
                        <ScrollView horizontal style={{ minWidth: width }}>
                            <List.Item title={element} key={index} titleStyle={{ textAlign: 'auto', marginRight: width }} style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />
                        </ScrollView>

                    ))
                    }
                </ScrollView>
            </View>
        );
    }
}

export default Affiliations;