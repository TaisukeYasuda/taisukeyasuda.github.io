import React, { Fragment, useState } from 'react';

import {
  ALL_PUBLICATION_SECTIONS,
  PUBLICATIONS,
  SELECTED_PUBLICATION_IDS,
  TEACHING,
  THESES,
} from './academics-data';

const SectionHeader = ({ section }) => (
  <h4 className="academics-section-header">
    <span className="academics-section-header__label">{section}</span>
  </h4>
);

const Pitch = ({ pitch }) => (
  <span className="academics-pitch">Summary: {pitch}</span>
);

const PubVenue = ({ name }) => <span className="academics-pub-venue">{name}</span>;
const PubInSubmission = () => <span className="academics-pub-venue">In submission</span>;
const PubSpecial = ({ name }) => <span className="academics-pub-special">{name}</span>;
const PubSection = ({ name }) => <span className="academics-pub-section">{name}</span>;

const PubTitle = ({ title, bib }) => (
  <span>
    <span className="academics-pub-title">{title}</span>{' '}
    {bib ? (
      <span>
        [<a href={bib}>bib</a>]
      </span>
    ) : (
      ''
    )}
  </span>
);

const ResourceItem = ({ item }) => {
  if (item.href) {
    return <a href={item.href}>{item.label}</a>;
  }

  return item.text;
};

const ResourceGroup = ({ group }) => (
  <Fragment>
    [
    {group.map((item, index) => (
      <Fragment key={`${item.href || item.text}-${index}`}>
        <ResourceItem item={item} />
      </Fragment>
    ))}
    ]
  </Fragment>
);

const ResourceGroups = ({ groups }) => (
  <Fragment>
    {groups.map((group, index) => (
      <Fragment key={index}>
        <ResourceGroup group={group} />
        {index < groups.length - 1 ? ' ' : null}
      </Fragment>
    ))}
  </Fragment>
);

const Publication = ({ publication }) => (
  <li>
    <PubTitle title={publication.title} bib={publication.bib} /> <br />
    {publication.authors} <br />
    {publication.status ? (
      <PubInSubmission />
    ) : (
      <Fragment>
        <PubVenue name={publication.venue} />
        {publication.venueNote || ''}
      </Fragment>
    )}
    <br />
    {publication.special ? (
      <Fragment>
        <PubSpecial name={publication.special} />
        <br />
      </Fragment>
    ) : null}
    <ResourceGroups groups={publication.resourceGroups} />
    <br />
    {publication.pitch ? (
      <Fragment>
        <br />
        <Pitch pitch={publication.pitch} />
        <br />
      </Fragment>
    ) : (
      Array.from({ length: publication.extraBreaksAfterLinks || 0 }, (_, index) => <br key={index} />)
    )}
  </li>
);

const PublicationList = ({ ids }) => (
  <ul>
    {ids.map((id, index) => (
      <Fragment key={id}>
        <Publication publication={PUBLICATIONS[id]} />
        {index < ids.length - 1 ? <br /> : null}
      </Fragment>
    ))}
  </ul>
);

const ResearchAll = () => (
  <div className="research">
    {ALL_PUBLICATION_SECTIONS.map((section) => (
      <Fragment key={section.heading}>
        <SectionHeader section={section.heading} />
        <PublicationList ids={section.ids} />
      </Fragment>
    ))}
  </div>
);

const ResearchSelected = () => (
  <div className="research">
    <SectionHeader section="Selected" />
    <PublicationList ids={SELECTED_PUBLICATION_IDS} />
  </div>
);

const InlineItems = ({ items }) => (
  <Fragment>
    {items.map((item, index) => (
      <Fragment key={`${item.href || item.text}-${index}`}>
        <ResourceItem item={item} />
      </Fragment>
    ))}
  </Fragment>
);

const Theses = () => (
  <div>
    <h3>Theses</h3>
    {THESES.map((thesis, index) => (
      <Fragment key={thesis.title}>
        <PubTitle title={thesis.title} />
        <br />
        <span className="academics-pub-venue">{thesis.degree}</span>
        <br />
        Committee: <InlineItems items={thesis.committee} />
        <br />
        <ResourceGroups groups={thesis.resourceGroups} />
        {index < THESES.length - 1 ? (
          <Fragment>
            <br />
            <br />
          </Fragment>
        ) : null}
      </Fragment>
    ))}
  </div>
);

const Teaching = () => (
  <div>
    <h3>Teaching</h3>
    <table className="academics-teaching-table">
      <tbody>
        {TEACHING.map((entry) => (
          <tr key={`${entry.course}-${entry.term}`}>
            <td>
              {entry.href ? <a href={entry.href}>{entry.course}</a> : entry.course} ({entry.role})
            </td>
            <td>{entry.term}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ToggleLink = ({ children, onClick }) => (
  <button type="button" className="academics-toggle" onClick={onClick}>
    {children}
  </button>
);

const Academics = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="academics" className="docs-section">
      <div className={showAll ? undefined : 'hidden'}>
        <PubSection name="All papers" /> [
        <ToggleLink onClick={() => setShowAll(false)}>show selected papers</ToggleLink>]
        <ResearchAll />
      </div>
      <div className={showAll ? 'hidden' : undefined}>
        <PubSection name="Selected papers" /> [
        <ToggleLink onClick={() => setShowAll(true)}>show all papers</ToggleLink>]
        <ResearchSelected />
      </div>
      <Theses />
      <Teaching />
    </section>
  );
};

export default Academics;
