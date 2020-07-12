import React from 'react';
import Infos, { TimeInfo } from './';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Infos',
  component: 'Infos',
  decorators: [withKnobs],
};

export const PureText = () => <Infos>Some text</Infos>;

export const WithMultipleChildren = () => (
  <Infos>
    <span>Item in span</span>
    {/* Pure text between spans */} Item in text<span>Item in span 2</span>
    {/* Pure text between spans */}
    {boolean('Show optional item (falsy children demo)', false) && (
      <span>Optional item</span>
    )}
    <>
      {/* Fragment considered as 1 item */}
      Item <em>wrapped</em> in fragment
    </>
  </Infos>
);

export const WithTimeInfo = () => (
  <Infos>
    {/* Time given */}
    <TimeInfo time={new Date(612921600000)} />

    {/* Customized time rendering logic */}
    <TimeInfo time={new Date(612921600000)}>
      {str => `Created ${str} ago`}
    </TimeInfo>

    {/* Time given incorrectly */}
    <TimeInfo time={null} />

    {/* Customized time rendering with incorrect time */}
    <TimeInfo time={null}>{str => `Created ${str} ago`}</TimeInfo>
  </Infos>
);
