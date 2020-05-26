var Bulb = React.createClass(  {
    getInitialState : function(){
        return{
            status : false
        }
    },

    switch : function (){
      this.setState({
          status :!this.state.status
      });
    },

    render :function(){
        var dispBulb = thid.State.status ? 'bulbOff.jpg' :'bulbOn.jpg';

        return (
            <div>

            <img src={dispBulb}/>

            <button onClick={this.switch}>Click Me</button>
            </div>
        );

        }

}

);

ReactDOM.render(
    <Bulb/>
);