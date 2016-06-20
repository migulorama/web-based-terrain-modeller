import angular from 'angular';
import heightmap_reader from './heightmap_reader.service';
import normalmap_generator from './normalmap_generator.service';
import random_surface_generator from './random_surface_generator.service';
import spline_editor from './spline_editor';

export default angular.module('app.common', [])
  .service(heightmap_reader.service_name, heightmap_reader)
  .service(normalmap_generator.service_name, normalmap_generator)
  .service(random_surface_generator.service_name, random_surface_generator)
  .directive(spline_editor.directive_name, spline_editor.factory)
  ;
  