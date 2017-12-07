import React from 'react'

class App extends React.Component {
  state = {
    username:'',
    sex:'yao'
  }
  // handleClick = () => {
  //   console.log(this.input.value)
  // }
  handleInput = e => {
    //作为 input 修改 state 的函数
    this.setState({
      username: e.target.value
    })
    // console.log(this.state.username)
  }
  handleRadio = e => {
    //作为 input 修改 state 的函数
    this.setState({
      sex: e.target.value
    })
    // console.log(this.state.username)
  }
  handleSubmit = e => {
    e.preventDefault()
    const { username } = this.state
    console.log(`用户名:${username}`)
  }

  render () {
    return(
      <div>
        {
        //   <button onClick={ this.handleClick }>按钮</button>
        // <input ref={ inp => this.input = inp } type='text' defaultValue='111' ></input>
      }
        <form >
          username:<input type='text' value={  this.state.username } onChange={ this.handleInput }></input><br/>
        性别:
        男<input type='radio' name='sex' value='male' checked={this.state.sex === 'male'? true :false } onChange={ this.handleRadio }></input>

        女<input type='radio' name='sex' value='female' checked={this.state.sex === 'female'? true :false } onChange={ this.handleRadio }></input>

        人妖<input type='radio' name='sex' value='yao' checked={this.state.sex === 'yao'? true :false } onChange={ this.handleRadio }></input><br/>
        <input type='submit' onClick={this.handleSubmit}></input>
        </form>
      </div>
    )
  }
}

//react   form
// 受控组件
// 1.将变化的值 设置为 state
// 2.修改 state 使用 onChange 事件

// 非受控组件
// value ===>  defaultValue
// checked ===> defaultChecked
// selected ===> defaultSelected
// 变化的 值不受state控制  只能使用 真实dom节点获取

// 如果不使用 form 本身的提交功能传递数据，而使用 ajax 提交的话，
// 依然想使用 type=submit 按钮提交, 注意 要阻止 submit 按钮的默认事件
export default App
