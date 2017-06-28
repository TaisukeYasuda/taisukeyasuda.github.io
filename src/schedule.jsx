import React from 'react'
import {render} from 'react-dom'

class Schedule extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    fetch('/assets/json/coursework.json', {
      method: 'GET'
    }).then(res => {
      return res.json()
    }).then(function(res) {
      this.setState({
        coursework: res
      })
    }).catch(error => {
      console.error(error)
    })
  }

  render() {
    return (
      <div>
        <table>
          <tbody style={{'verticalAlign': 'top'}}>
            <tr>
              <td><Semester semester={coursework.fall17} /></td>
              <td><Semester semester={coursework.spring18} /></td>
            </tr>
            <tr>
              <td><Semester semester={coursework.fall16} /></td>
              <td><Semester semester={coursework.spring17} /></td>
            </tr>
            <tr>
              <td><Semester semester={coursework.fall15} /></td>
              <td><Semester semester={coursework.spring16} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

class Semester extends React.Component {
  constructor() {
    super()
  }

  render() {
    var courses = this.props.semester.courses.map((course,key) => {
      return (
        <tr key={key}>
          <td>{course.number}</td><td>{course.name}</td>
        </tr>
      )
    })
    var sem = this.props.semester.sem,
        year = this.props.semester.year
    return (
      <div>
        <h3>{sem} {year}</h3>
        <table>
          <tbody>{courses}</tbody>
        </table>
      </div>
    )
  }
}

$(document).ready(function() {
  render(<Schedule />, document.getElementById('schedule'))
})
