var RefComponent = React.createClass({
    display : function(){
        var name = this.inputdemo.value;
        document.getElementById("dispName").innerHTML = name;

    },
    render :function(){
        return(
            <div>
                <h2>Name :<input type={text} ref={input =>this.inputdemo=input}/></h2><br/><br/>
                <button onClick={this.display}>Click</button>
                <h1>HI ....<span id={dispName}></span></h1>
            </div>
        );
    }
});

ReactDOM.render(
    <RefComponent/>,document.getElementById('content')
);