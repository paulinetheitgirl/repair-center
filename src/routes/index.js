// We only need to import the modules necessary for initial render
import CoreLayout from '../components/PageLayout';
import React from 'react';
import { Route } from 'react-router';
import Home from '../components/Home';
import Category from '../components/Category';
import IphoneModel from '../components/Iphone';
import Issue from '../components/Issue';

export default (
  <CoreLayout>
    <Route exact path='/' component={Home} />
    <Route path='/category' component={Category} />
    <Route path='/model' component={IphoneModel} />
    <Route path='/issue' component={Issue} />
  </CoreLayout>
)
