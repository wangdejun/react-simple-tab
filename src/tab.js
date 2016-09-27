import React, { Component } from 'react';
import { render } from 'react-dom';
import 'tab.scss';

export default class FilterProduct extends React.Component{
    constructor(){
        super();
        this.state = {
            t1:{color:'#999'},
            t2:{color:'#999'},
            t3:{color:'#999'},
            t4:{color:'#999'},
            c:{transform:'translateY(-100%)'},
            c1:{transform:'translateY(-100%)'},
            c2:{transform:'translateY(-100%)'},
            c3:{transform:'translateY(-100%)'},
            c4:{transform:'translateY(-100%)'}
        }
    }

    handle_t1(){
            this.setState((this.state.t1.color=="#999")?{t1:{color:'#000'},t2:{color:'#999'},t3:{color:'#999'},t4:{color:'#999'}}:{t1:{color:'#999'}})
            this.setState((this.state.c1.transform=="translateY(-100%)")?{c1:{transform:'translateY(0)'},c2:{transform:'translateY(-100%)'},c3:{transform:'translateY(-100%)'},c4:{transform:'translateY(-100%)'}} : {c1:{transform:'translateY(-100%)'}});
    }
    handle_t2(){
            this.setState((this.state.t2.color=="#999") ? {t2:{color:'#000'},t1:{color:'#999'},t3:{color:'#999'},t4:{color:'#999'}} : {t2:{color:'#999'}})
            this.setState((this.state.c2.transform=="translateY(-100%)") ? {c2:{transform:'translateY(0)'},c1:{transform:'translateY(-100%)'},c3:{transform:'translateY(-100%)'},c4:{transform:'translateY(-100%)'}} : {c2:{transform:'translateY(-100%)'}});
    }
    handle_t3(){
            this.setState((this.state.t3.color=="#999")?{t3:{color:'#000'},t1:{color:'#999'},t2:{color:'#999'},t4:{color:'#999'}}:{t3:{color:'#999'}})
            this.setState((this.state.c3.transform=="translateY(-100%)")?{c3:{transform:'translateY(0)'},c1:{transform:'translateY(-100%)'},c2:{transform:'translateY(-100%)'},c4:{transform:'translateY(-100%)'}} : {c3:{transform:'translateY(-100%)'}});
    }
    handle_t4(){
            this.setState((this.state.t4.color=="#999")?{t4:{color:'#000'},t1:{color:'#999'},t2:{color:'#999'},t3:{color:'#999'}}:{t4:{color:'#999'}})
            this.setState((this.state.c4.transform=="translateY(-100%)")?{c4:{transform:'translateY(0)'},c1:{transform:'translateY(-100%)'},c2:{transform:'translateY(-100%)'},c3:{transform:'translateY(-100%)'}} : {c4:{transform:'translateY(-100%)'}});
    }

    render() {
        return (
            <div className="filter-tab">
                <div className="tab-title">
                    <div className="tab-title-item" onClick={()=>this.handle_t1()} style={this.state.t1}>Tab1-title</div>
                    <div className="tab-title-item" onClick={()=>this.handle_t2()} style={this.state.t2}>Tab2-title</div>
                    <div className="tab-title-item" onClick={()=>this.handle_t3()} style={this.state.t3}>Tab3-title</div>
                    <div className="tab-title-item" onClick={()=>this.handle_t4()} style={this.state.t4}>Tab4-title</div>
                </div>


                <div className="tab-content-item" style={this.state.c1}>
                    <h1>
                        Tab1 Content
                    </h1>
                </div>

                <div className="tab-content-item" style={this.state.c2}>
                    <h1>
                        Tab2 Content
                    </h1>
                </div>

                <div className="tab-content-item" style={this.state.c3}>
                    <h1>
                        Tab3 Content
                    </h1>
                </div>
                <div className="tab-content-item" style={this.state.c4}>
                    <h1>
                        Tab3 Content
                    </h1>
                </div>
            </div>
        );
    }
}
