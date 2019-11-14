import React, { Component } from 'react'
import {Card,Row,Col,Modal} from 'antd';
export default class Gallery extends Component {
   
     state = {
        visible:false           
    }
    oppenGallery = (imgSrc)=>{
        this.setState({
            visible:true,
            currentImg:'/gallery/'+imgSrc
        })

    }
    render() {
        const imgs = [
            ['1.png','2.png','3.png','4.jpg','5.png'],
            ['21.png','13.png','18.png','9.jpg','10.png'],
            ['11.png','12.png','7.jpg','14.png','15.png'],
            ['16.png','17.png','8.jpg','19.png','20.png'],
            ['6.jpg','22.png','23.png','24.png','25.jpg'],
        ]
        
        const imgList = imgs.map((list)=>{
            return list.map((item)=>{
                return (
                    <Card
                    style={{marginBottom:10}}
                    cover={<img alt="n" src={'/gallery/'+item}
                    onClick = {()=>this.oppenGallery(item)}
                    />}
                    >
                    <Card.Meta
                        title="react Admin"
                        description="content"
                    >

                    </Card.Meta>

                    </Card>
                )
            })
        })
        return (
            <div>
                <Row    gutter={10}>
                    <Col md={5}>
                        {imgList[0]}
                    </Col>
                    <Col md={5}>
                        {imgList[1]}
                    </Col>
                    <Col md={5}>
                        {imgList[2]}
                    </Col>
                    <Col md={5}>
                        {imgList[3]}
                    </Col>
                    <Col md={4}>
                        {imgList[4]}
                    </Col>
                </Row>
                <Modal visible={this.state.visible}
                    onCancel = {()=>{
                        this.setState({
                            visible:false
                        })
                    }}
                    footer={null}
                    width={300}
                    height={500}
                    title='画廊'
                >
                    {<img src={this.state.currentImg} alt="n" style={{width:'100%'}}/>}
                </Modal>
               
            </div>
        )
    }
}
