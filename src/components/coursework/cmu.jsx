import * as React from 'react';
import cmu from '../../json/cmu-coursework.json';

const Semester = ({ sem }) => (
  <div>
    <h3>{ sem.sem } { sem.year }</h3>
    <table>
      <tbody>
        { sem.courses &&
          sem.courses.map((course, i) => (
            <tr key={ i }>
              <td>{ course.number }</td>
              <td>{
                course.url ? (
                  <a href={ course.url }>{ course.name }</a>
                ) : course.name } { course.graduate && '*' }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);

const CMU = () => (
  <div>
    <p>(* indicates graduate level)</p>
    <table>
      <tbody style={ { verticalAlign: 'top' } }>
        <tr>
          <td><Semester sem={ cmu.spring21 } /></td>
          <td><Semester sem={ cmu.fall20 } /></td>
        </tr>
        <tr>
          <td><Semester sem={ cmu.spring19 } /></td>
          <td><Semester sem={ cmu.fall18 } /></td>
        </tr>
        <tr>
          <td><Semester sem={ cmu.spring18 } /></td>
          <td><Semester sem={ cmu.fall17 } /></td>
        </tr>
        <tr>
          <td><Semester sem={ cmu.spring17 } /></td>
          <td><Semester sem={ cmu.fall16 } /></td>
        </tr>
        <tr>
          <td><Semester sem={ cmu.sumII16 } /></td>
          <td><Semester sem={ cmu.sumI16 } /></td>
        </tr>
        <tr>
          <td><Semester sem={ cmu.spring16 } /></td>
          <td><Semester sem={ cmu.fall15 } /></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default CMU;
