import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Data } from '../../app';
import { Card } from '../card/card';
import { Paginator } from "../paginator/paginator";

@Component({
  selector: 'app-contents',
  imports: [MatGridListModule, Card, Paginator],
  templateUrl: './contents.html',
  styleUrl: './contents.css'
})

export class Contents {
  data:Data[] = [
    {
      img:"https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis est voluptates repudiandae doloribus suscipit sequi animi aspernatur expedita aliquam!"
    },
    {
      img:"https://material.angular.dev/assets/img/examples/shiba2.jpg",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis est voluptates repudiandae doloribus suscipit sequi animi aspernatur expedita aliquam!"
    },
    {
      img:"https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis est voluptates repudiandae doloribus suscipit sequi animi aspernatur expedita aliquam!"
    },
    {
      img:"https://material.angular.dev/assets/img/examples/shiba2.jpg",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis est voluptates repudiandae doloribus suscipit sequi animi aspernatur expedita aliquam!"
    },
    {
      img:"https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis est voluptates repudiandae doloribus suscipit sequi animi aspernatur expedita aliquam!"
    },
    {
      img:"https://material.angular.dev/assets/img/examples/shiba2.jpg",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis est voluptates repudiandae doloribus suscipit sequi animi aspernatur expedita aliquam!"
    },
    {
      img:"https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis est voluptates repudiandae doloribus suscipit sequi animi aspernatur expedita aliquam!"
    },
    {
      img:"https://material.angular.dev/assets/img/examples/shiba2.jpg",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis est voluptates repudiandae doloribus suscipit sequi animi aspernatur expedita aliquam!"
    },
    {
      img:"https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis est voluptates repudiandae doloribus suscipit sequi animi aspernatur expedita aliquam!"
    },
    {
      img:"https://material.angular.dev/assets/img/examples/shiba2.jpg",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis est voluptates repudiandae doloribus suscipit sequi animi aspernatur expedita aliquam!"
    },
    {
      img:"https://i.guim.co.uk/img/media/327aa3f0c3b8e40ab03b4ae80319064e401c6fbc/377_133_3542_2834/master/3542.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=34d32522f47e4a67286f9894fc81c863",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis est voluptates repudiandae doloribus suscipit sequi animi aspernatur expedita aliquam!"
    },
    {
      img:"https://material.angular.dev/assets/img/examples/shiba2.jpg",
      title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere perferendis est voluptates repudiandae doloribus suscipit sequi animi aspernatur expedita aliquam!"
    },
  ]
}
