import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {RiCloseFill} from 'react-icons/ri'
import {BsSearch} from 'react-icons/bs'

import Header from '../Header'
import SidebarSection from '../SidebarContainer'
import VideoItemCard from '../VideoListItem'
import Context from '../../context/Context'

import './index.css'
import {
  HomeBgContainer,
  HomeBarsContainer,
  MainContainer,
  BannerContainer,
  BannerContentContainer,
  BannerCloseButton,
  BannerHeading,
  BannerImage,
  BannerButton,
  VideosListHome,
  FailureViewContainer,
  FailureViewImage,
  FailureHeading,
  FailureText,
  FailureRetryButton,
  SearchForm,
  SearchInput,
  SearchButton,
  NoVideosViewContainer,
  NoVideosViewImage,
  NoVideosHeading,
  NoVideosText,
  NoVideosViewRetryButton,
} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component { 

  render() {
    return (
      <div>
        <h1>Home component</h1>
      </div>
    )
  }
}

export default Home