import React,{Component} from 'react'
import {Text,View} from 'react-native'

export default class Col extends Component{
    render(){
      return <View style={{flex:1 }}>
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