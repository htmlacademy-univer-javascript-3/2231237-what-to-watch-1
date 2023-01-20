import {useState} from 'react';
import {TabTypes} from '../../const';
import DetailsTab from './details-tab';
import OverviewTab from './overview-tab';
import ReviewsTab from './reviews-tab';


function Tabs() {
  const [activeTab, setActiveTab] = useState(TabTypes.Overview);

  const renderTabByType = () => {
    switch (activeTab) {
      case TabTypes.Details:
        return <DetailsTab/>;
      case TabTypes.Overview:
        return <OverviewTab/>;
      case TabTypes.Review:
        return <ReviewsTab/>;
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === TabTypes.Overview ? 'film-nav__item--active' : ''}`}>
            <a className="film-nav__link" onClick={() => setActiveTab(TabTypes.Overview)}>Overview</a>
          </li>
          <li className={`film-nav__item ${activeTab === TabTypes.Details ? 'film-nav__item--active' : ''}`}>
            <a className="film-nav__link" onClick={() => setActiveTab(TabTypes.Details)}>Details</a>
          </li>
          <li className={`film-nav__item ${activeTab === TabTypes.Review ? 'film-nav__item--active' : ''}`}>
            <a className="film-nav__link" onClick={() => setActiveTab(TabTypes.Review)}>Reviews</a>
          </li>
        </ul>
      </nav>
      {renderTabByType()}
    </div>
  );
}

export default Tabs;
