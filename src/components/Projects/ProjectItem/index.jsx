import './index.scss';

import React from 'react';
import useLanguage from '../../../hooks/useLanguage';
import { LANGUAGE } from '../../../constants/language';
import gtag from 'ga-gtag';
import noImage from '../../../assets/static/images/no-image.png';

const ProjectItem = ({
  title,
  term,
  imgUrl = '../../../assets/static/images/no-image.png',
  tags,
  descriptionEN,
  descriptionFR,
  attribution,
  projectUrl,
  githubUrl,
}) => {
  const addDefaultSrc=({target}) => (target.src = noImage)
  const { currentLanguage } = useLanguage()

  return (
    <div className='project'>
      <a
        className='project__details'
        href={projectUrl}
        target='_blank'
        rel='noopener noreferrer'
        onClick={() => gtag("event","ProjectClick_"+title.replaceAll(" ","_"))}
      >
        <div className='item__image'>
          <img src={imgUrl} alt={`${title} logo`} onError={addDefaultSrc} />
        </div>
        <div className='item__details'>
          <div className='title'>
            {title} <span className='term'>({term})</span>
          </div>
          <div className='description'>{currentLanguage === LANGUAGE.EN?descriptionEN:descriptionFR}</div>
          <div className='attribution'>{attribution}</div>
          <div className='tags'>
            {tags.map((tag, index) => (
              <div key={index} className='tag'>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </a>
      {githubUrl && (
        <div className='project__links'>
          <a href={githubUrl} onClick={() => gtag("event", "ProjectGitClick_"+title.replaceAll(" ","_"))}>
            <div className='github-logo' />
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
