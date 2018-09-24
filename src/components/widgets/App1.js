

import React, { Component } from '../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react'
import { View,Text } from 'react-native'


export default class App extends Component {
    constructor(props){
        super(props)
        
        this.state={
            var : "hola",
            backgroundColor : "grey",
        }
    }
    componentWillMount(){
        setTimeout(() => {
            this.setState({var:"EnTransito"})
        },1000)
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({ var: 'adios' })
        },3000)
        
        
        
    }

 
    render() {
        return (
            <View style={{backgroundColor: "red" , flex: 1 }}>
                <View style={{ backgroundColor:this.state.backgroundColor, flex: 1}}>
                    <Text style={{
                        backgroundColor:'white',
                        fontSize: 10,
                        textAlign: 'center',
                        margin: 40,}} >
                         {this.state.var}
                    </Text>
                </View>
                <View style={{backgroundColor:"green" , flex:1}}></View>
            </View>
        );
    }
}