import {State} from "../../types/state";
import {Review} from "../../types/review";
import {NameSpace} from "../../const";

export const getReviews = (state: State): Review[] => state[NameSpace.Review].review;

export const getLoadedDataStatusReview = (state: State): boolean => state[NameSpace.Review].isDataLoaded;
