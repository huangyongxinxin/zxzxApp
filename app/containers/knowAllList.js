import React, {Component} from 'react'
import {connect} from 'react-redux'
import {View, FlatList, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {NavigationActions} from 'react-navigation'

class KnowAllList extends Component {

    _toDetailPage(item){
        const {dispatch} = this.props
        dispatch(NavigationActions.navigate({routeName:'KnowAllDetail',params:item}))
    }

    render() {
        let arr = [
            {
                key: 1,
                img: require('../asset/img1.jpg'),
                title: '哈哈哈哈哈哈哈',
                bodyText: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
            }, {
                key: 2,
                img: require('../asset/img1.jpg'),
                title: '哈哈哈哈哈哈哈',
                bodyText: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
            }, {
                key: 3,
                img: require('../asset/img1.jpg'),
                title: '哈哈哈哈哈哈哈',
                bodyText: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
            }, {
                key: 4,
                img: require('../asset/img1.jpg'),
                title: '哈哈哈哈哈哈哈',
                bodyText: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
            }
        ]
        return (
            <FlatList
                style={styles.list}
                data={arr}
                renderItem={({item,index}) => (
                <TouchableOpacity style={[styles.listView,index==arr.length-1?styles.lastViewNoBorder:'']} onPress={()=>this._toDetailPage(item)}>
                    <Image source={item.img} resizeMode="stretch" style={styles.listImg}/>
                    <View style={styles.textView}>
                        <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                        <Text style={styles.text} numberOfLines={2}>{item.bodyText}</Text>
                    </View>
                </TouchableOpacity>
            )}/>
        )
    }
}

const styles = StyleSheet.create({
    list:{
        paddingHorizontal:10,
        backgroundColor:'#fff',
    },
    listView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        paddingBottom:10,
        borderBottomWidth: 1,
        borderBottomColor: '#dddee1'
    },
    lastViewNoBorder:{
        borderBottomWidth: 0
    },
    listImg:{
        flex:1,
        height:80
    },
    textView:{
        flex:2,
        marginLeft:10
    },
    title:{
        fontSize:16,
        color: '#575757'
    },
    text:{
        marginTop:10,
        fontSize: 12,
        color: '#9f9f9f',
        //flexWrap:'wrap'
    }
})

const mapStateToProps = store=>({
    nav:store.nav
})

export default connect(mapStateToProps)(KnowAllList)