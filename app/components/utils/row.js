import React,{Component} from 'react'
import {Text,View} from 'react-native'

export default class Row extends Component{
    render(){
      return <View style={{ flexDirection:'row'}}>
                {
                  React.Children.map(
                    this.props.children,
                       (value,index)=>{
                            return value
                       }
                    
                  )
                } 
             </View>
    }
}