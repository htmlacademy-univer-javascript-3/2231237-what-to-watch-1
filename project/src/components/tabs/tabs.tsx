import {useState} from 'react';
import {Film} from '../../types/film';
import {Review} from '../../types/review';
import {TabTypes} from '../../const';
import DetailsTab from './details-tab';
import OverviewTab from './overview-tab';
import ReviewsTab from './reviews-tab';


type Props = {
  film: Film | null
}

function Tabs(props: Props) {
  const {film} = props;
  const [activeTab, setActiveTab] = useState(TabTypes.OVERVIEW);

  const renderTabByType = () => {
    switch (activeTab) {
      case TabTypes.DETAILS:
        return <DetailsTab film={film}/>
      case TabTypes.OVERVIEW:
        return <OverviewTab film={film}/>
      case TabTypes.REVIEW:
        return <ReviewsTab/>
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === TabTypes.OVERVIEW ? "film-nav__item--active" : ""}`}>
            <a className="film-nav__link" onClick={() => setActiveTab(TabTypes.OVERVIEW)}>Overview</a>
          </li>
          <li className={`film-nav__item ${activeTab === TabTypes.DETAILS ? "film-nav__item--active" : ""}`}>
            <a className="film-nav__link" onClick={() => setActiveTab(TabTypes.DETAILS)}>Details</a>
          </li>
          <li className={`film-nav__item ${activeTab === TabTypes.REVIEW ? "film-nav__item--active" : ""}`}>
            <a className="film-nav__link" onClick={() => setActiveTab(TabTypes.REVIEW)}>Reviews</a>
          </li>
        </ul>
      </nav>
      {renderTabByType()}
    </div>
  );
}

export default Tabs;
