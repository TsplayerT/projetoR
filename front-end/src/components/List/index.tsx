import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Label } from '../Label/index';

import {
  TitleLabel,
  ListItem
} from './styles';

interface IProps {
  title?: string;
  items: Array<IItem>;
}

export interface IItem {
  discription: string;
}

export const List = ({ title, items }: IProps): ReactElement => (
  <View>
    {title && <TitleLabel>{ title }</TitleLabel>}
    <View>{ items.map((item, index) => (
      <ListItem key={index} >
        <Label>{ item.discription }</Label>
      </ListItem>
    )) }</View>
  </View>
);