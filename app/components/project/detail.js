import React,{Component} from 'react';
import {Text,View,ScrollView,Image} from 'react-native';
import Global from '../utils/global'
export default class DetailComponent extends Component{
  constructor(){
    super();
    this.state={
       title:"",    //标题
       subtitle:"",//副标题
       picList:[],
       picIndex:0,
       timer:null
    };
  }
  componentDidMount(){
      var lid=this.props.navigation.getParam('lid');
      console.log(Global.baseUrl+"product/details.php?lid="+lid);
      fetch(Global.baseUrl+"product/details.php?lid="+lid)
      .then(response=>response.json())
      .then((result)=>{
          this.setState({title:result.details.title,
            subtitle:result.details.subtitle,
            picList:result.details.picList
          });
      });
      var myTimer=setInterval(()=>{
         //获取当前遍历的是第几个
         var nowIndex=this.state.picIndex;
         nowIndex++;
         if(nowIndex == this.state.picList.length){
            nowIndex=0;
         }  
         this.setState({ picIndex:nowIndex}); 
      },1000);
      this.setState({timer:myTimer});
  }
  componentWillUnmount(){
      clearInterval(this.state.timer);
  }

  render(){
     return <View style={{flex:1}}>
                <ScrollView>
                      {/*picList状态中对应的数组中的某一图片*/}
                      {
                           this.state.picList.length>0
                           &&
                           <Image style={{width:200,height:200}} source={{uri:Global.baseImgUrl+this.state.picList[this.state.picIndex].lg}}></Image>
                      }
                     
                     <Text>{this.state.title}</Text>
                     <Text>{this.state.subtitle}</Text>        

                </ScrollView>
                <View style={{height:50,alignItems:'center',backgroundColor:'red',justifyContent:'center'}}>
                    <Text>编辑产品</Text>  
                </View>    
            </View>
  }
}