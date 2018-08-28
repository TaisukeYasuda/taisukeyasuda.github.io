import * as React from 'react';
import violinAwards from '../../json/violin-awards.json';

const Other = () => (
  <section id="other" className="docs-section">
    <h2 class="section-title">Other</h2>

    <h3>Violin</h3>
    Here are some of my recordings:
    <ul>
      <li><a href="https://www.youtube.com/watch?v=YqUru54adfs">Tchaikovsky Violin Concerto (Mov. 1)</a></li>
      <li><a href="https://www.youtube.com/watch?v=bS4IES_3hr8&t=28m30s">Paganini Violin Concerto No. 1 (Mov. 1)</a></li>
    </ul>
    and here are some awards and honors I have received:
    <table style={ {width: '100%'} }>
      <tbody>
      {
        (
          violinAwards.awards.map((award, i) => {
            return (
                <tr key={ i }>
                  <td>{ award.year }</td>
                  <td>{ award.link ? <a href={ award.link }>{ award.venue }</a> : award.venue }</td>
                  <td>{ award.award }</td>
                </tr>
            );
          })
        )
      }
      </tbody>
    </table>
  </section>
);

export default Other;
