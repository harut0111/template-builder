import React from 'react'
import { SOCIAL_MEDIA_LIST } from '../../configs/constants'

export const getSocialMediaIcon = label => {
  const Icon = SOCIAL_MEDIA_LIST.filter(item => item.label === label)[0].Icon;
  return <Icon />;
};
