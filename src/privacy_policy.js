import React from 'react';
import ReactDOM from 'react-dom';
var show="";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: show };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
  //  alert("ya allah");
    this.setState({text: show});
  }
  render() {
    const divstyle={
      margin_bottom: "10px"
    }
    return (
      <div className="col-md-12" style= {divstyle} >
        <input
          type={this.props.type}
          className={this.props.classname}
          value={this.state.text}
          readOnly />
        <div className="row" id="micalcbtns">
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg
			btn-block btn btn-primary"
            value="7"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-primary"
            value="8"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-primary"
            value="9"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-success"
            value="+"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-primary"
            value="4"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-primary"
            value="5"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-primary"
            value="6"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-success"
            value="-"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-primary"
            value="3"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-primary"
            value="2"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-primary"
            value="1"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-success"
            value="*"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-primary"
            value="0"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-primary"
            value="."
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-success"
            value="1/x"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-success"
            value="/"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="btn3d btn btn-danger btn-lg btn-block"
            value="Clear"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="btn3d btn btn-danger btn-lg btn-block"
            value="Delete"
            click={this.updateState}
          />
          <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-success"
            value="%"
            click={this.updateState}
          />
        <Input
            type="button"
            classname="micalctcl btn3d btn-lg btn-block btn btn-warning"
            value="="
            click={this.updateState}
          />
      </div>
    </div>
    );
  }
}
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    var flag1=0;
//alert(show);
    if (flag1 === 1) {
      show="";
      alert(show);
      flag1=0;
    }
    //alert(show);
    if (["+","*","/","-","%","1/x","="].indexOf(this.props.value) > -1 && show === "" || flag1 === 1) {
      show="";
    }
    else {
      switch (this.props.value) {
        case "Delete":
          show = show.slice(0, show.length - 1);
          break;
        case "Clear":
          show = "";
          break;
        case "+":
          if (["+","*","/","-"].indexOf(show[show.length - 1]) > -1 ) {
            show = show.replace(show[show.length - 1], this.props.value);
          } else {
            show += this.props.value;
          }
          break;
        case "-":
          if (["+","*","/","-"].indexOf(show[show.length - 1]) > -1 ) {
            show = show.replace(show[show.length - 1], this.props.value);
          } else {
            show += this.props.value;
          }
          break;
        case "*":
          if (["+","*","/","-"].indexOf(show[show.length - 1]) > -1 ) {
            show = show.replace(show[show.length - 1], this.props.value);
          } else {
            show += this.props.value;
          }
          break;
        case "/":
          if (["+","*","/","-"].indexOf(show[show.length - 1]) > -1 ) {
            show = show.replace(show[show.length - 1], this.props.value);
          } else {
            show += this.props.value;
          }
          break;
        case "%":
          if (show.indexOf("+") < 0 && show.indexOf("-") < 0 && show.indexOf("*") < 0 && show.indexOf("/") < 0) {
            show = parseFloat(show) / 100;
            flag1 = 1;
          }
          break;
        case "1/x":
          if (show.indexOf("+") < 0 && show.indexOf("-") < 0 && show.indexOf("*") < 0 && show.indexOf("/") < 0) {
            show = 1 / parseFloat(show);
            flag1 = 1;
          }
          break;
        case "=":
          flag1 = 1;
          if (["+","*","/","-"].indexOf(show[show.length - 1]) > -1 ) {
            show = show.replace(show[show.length - 1], "");
          }
          if (show[0]==="0" && (show[1]!=="." || show[1]!=="+" || show[1]!=="-" || show[1]!=="*" || show[1]!=="/")) {
            show = show.replace(show[0], "");
          }
          flag1 = 1;
          show=eval(show);
          /*var operators = ["+", "-", "*", "/"];
          for (var i = 0; i < show.length; i++) {
            if (
              show[i] === operators[0] ||
              show[i] === operators[1] ||
              show[i] === operators[2] ||
              show[i] === operators[3]
            ) {
              op1.push(show[i]);
            }
          }
          var separators = ["\\+", "-", "\\*", "/"];
          var splits = show.split(new RegExp(separators.join("|"), "g"));
          /*for (i = 0; i < op1.length; i++) {
            if ((op1[0] === "+" && i === 0) || (op1[0] === "-" && i === 0)) {
              result = eval(splits[0] + op1[0] + splits[1]);
            }
            if ((op1[0] === "*" && i === 0) || (op1[0] === "/" && i === 0)) {
              result1 = eval(splits[0] + op1[0] + splits[1]);
              alert(result1)
              g = 0;
              flag = 1;
            }

            if ((op1[i + 1] === "*" || op1[i + 1] === "/") && flag === 0) {
              g = i;
              i++;
              result1 = eval(splits[i] + op1[i] + splits[i + 1]);
              flag = 1;
            } else if ((op1[i + 1] === "*" || op1[i + 1] === "/") && flag === 1) {
              i++;
              result1 = eval(result1.toString() + op1[i] + splits[i + 1]);
              flag = 1;
            } else {
              if (flag === 1 && i>0) {
                result = eval(result + op1[g] + result1);
                flag = 0;
              }
              if (i>0) {
                result = eval(result.toString() + op1[i] + splits[i + 1]);
              }
            }
          }
          show = result.toString*/
          break;
        default:
          var len = show.length;
          show += this.props.value;
          if (show[len-1]==="0") {
            if (show[len-2]==="+" || show[len-2]==="-" || show[len-2]==="*" || show[len-2]==="/") {
              show = show.replace(show[len - 1], "0.");
          }
        }
      }
    }
    this.props.click();
  }
  render() {
    return (
      <div className="col-md-3 col-xs-3 mbottom">
        <input
          type={this.props.type}
          className={this.props.classname}
          value={this.props.value}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
ReactDOM.render(<Calculator type="text" classname="form-control txtr" value="0" readOnly />, document.getElementById("calc"));
