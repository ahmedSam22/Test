import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studenthomepage',
  templateUrl: './studenthomepage.component.html',
  styleUrls: ['./studenthomepage.component.css']
})
export class StudenthomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  PopularTracks:any=[
    {
      Icon : "icofont-dart icofont-3x",
      Cap: "Lorem ipsum dolor sit amet"
    },
    
    {
      Icon : "icofont-dart icofont-3x",
      Cap: "Lorem ipsum dolor sit amet"
    },
    
    {
      Icon : "icofont-dart icofont-3x",
      Cap: "Lorem ipsum dolor sit amet"
    },
    
    {
      Icon : "icofont-dart icofont-3x",
      Cap: "Lorem ipsum dolor sit amet"
    },
    
    {
      Icon : "icofont-dart icofont-3x",
      Cap: "Lorem ipsum dolor sit amet"
    },
    
    {
      Icon : "icofont-dart icofont-3x",
      Cap: "Lorem ipsum dolor sit amet"
    },
    
    {
      Icon : "icofont-dart icofont-3x",
      Cap: "Lorem ipsum dolor sit amet"
    },
    
    {
      Icon : "icofont-dart icofont-3x",
      Cap: "Lorem ipsum dolor sit amet"
    },
    
    {
      Icon : "icofont-dart icofont-3x",
      Cap: "Lorem ipsum dolor sit amet"
    },
    
    {
      Icon : "icofont-dart icofont-3x",
      Cap: "Lorem ipsum dolor sit amet"
    },
    
    {
      Icon : "icofont-dart icofont-3x",
      Cap: "Lorem ipsum dolor sit amet"
    },
    
    {
      Icon : "icofont-dart icofont-3x",
      Cap: "Lorem ipsum dolor sit amet"
    },
    
    
  ]

  PopularCources:any=[
    {
        Img : "https://images.idgesg.net/images/article/2019/08/cso_nw_promoting_an_idea_lightbulb_technology_gear_by_natali_mis_gettyimages-1024234886_2400x1600-100808095-large.jpg",
        Price: 24,
        Rating : 3,
        RatingNumber : 240,
        Header : 'Header',
        Description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut quisquam,',
        EnrollIcon : 'icofont-cart-alt ',
        Enrolled : 250,
        LikeIcon : 'icofont-heart-alt ',
        Liked : 260,
        Rate : 3
      },
      
    {
      Img : "https://images.idgesg.net/images/article/2019/08/cso_nw_promoting_an_idea_lightbulb_technology_gear_by_natali_mis_gettyimages-1024234886_2400x1600-100808095-large.jpg",
      Price: 24,
      Rating : 3,
      RatingNumber : 240,
      Header : 'Header',
      Description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut quisquam,',
      EnrollIcon : 'icofont-cart-alt ',
      Enrolled : 250,
      LikeIcon : 'icofont-heart-alt ',
      Liked : 260,
      Rate : 3
    },
    
    {
      Img : "https://images.idgesg.net/images/article/2019/08/cso_nw_promoting_an_idea_lightbulb_technology_gear_by_natali_mis_gettyimages-1024234886_2400x1600-100808095-large.jpg",
      Price: 24,
      Rating : 3,
      RatingNumber : 240,
      Header : 'Header',
      Description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut quisquam,',
      EnrollIcon : 'icofont-cart-alt ',
      Enrolled : 250,
      LikeIcon : 'icofont-heart-alt ',
      Liked : 260,
      Rate : 3
    },
    
    {
      Img : "https://images.idgesg.net/images/article/2019/08/cso_nw_promoting_an_idea_lightbulb_technology_gear_by_natali_mis_gettyimages-1024234886_2400x1600-100808095-large.jpg",
      Price: 24,
      Rating : 3,
      RatingNumber : 240,
      Header : 'Header',
      Description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut quisquam,',
      EnrollIcon : 'icofont-cart-alt ',
      Enrolled : 250,
      LikeIcon : 'icofont-heart-alt ',
      Liked : 260,
      Rate : 3
    },
    
    {
      Img : "https://images.idgesg.net/images/article/2019/08/cso_nw_promoting_an_idea_lightbulb_technology_gear_by_natali_mis_gettyimages-1024234886_2400x1600-100808095-large.jpg",
      Price: 24,
      Rating : 3,
      RatingNumber : 240,
      Header : 'Header',
      Description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut quisquam,',
      EnrollIcon : 'icofont-cart-alt ',
      Enrolled : 250,
      LikeIcon : 'icofont-heart-alt ',
      Liked : 260,
      Rate : 3
    },
    
    {
      Img : "https://images.idgesg.net/images/article/2019/08/cso_nw_promoting_an_idea_lightbulb_technology_gear_by_natali_mis_gettyimages-1024234886_2400x1600-100808095-large.jpg",
      Price: 24,
      Rating : 3,
      RatingNumber : 240,
      Header : 'Header',
      Description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut quisquam,',
      EnrollIcon : 'icofont-cart-alt ',
      Enrolled : 250,
      LikeIcon : 'icofont-heart-alt ',
      Liked : 260,
      Rate : 3
    },
    
    {
      Img : "https://images.idgesg.net/images/article/2019/08/cso_nw_promoting_an_idea_lightbulb_technology_gear_by_natali_mis_gettyimages-1024234886_2400x1600-100808095-large.jpg",
      Price: 24,
      Rating : 3,
      RatingNumber : 240,
      Header : 'Header',
      Description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut quisquam,',
      EnrollIcon : 'icofont-cart-alt ',
      Enrolled : 250,
      LikeIcon : 'icofont-heart-alt ',
      Liked : 260,
      Rate : 3
    },
    
    {
      Img : "https://images.idgesg.net/images/article/2019/08/cso_nw_promoting_an_idea_lightbulb_technology_gear_by_natali_mis_gettyimages-1024234886_2400x1600-100808095-large.jpg",
      Price: 24,
      Rating : 3,
      RatingNumber : 240,
      Header : 'Header',
      Description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut quisquam,',
      EnrollIcon : 'icofont-cart-alt ',
      Enrolled : 250,
      LikeIcon : 'icofont-heart-alt ',
      Liked : 260,
      Rate : 3
    },
    
    {
      Img : "https://images.idgesg.net/images/article/2019/08/cso_nw_promoting_an_idea_lightbulb_technology_gear_by_natali_mis_gettyimages-1024234886_2400x1600-100808095-large.jpg",
      Price: 24,
      Rating : 3,
      RatingNumber : 240,
      Header : 'Header',
      Description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut quisquam,',
      EnrollIcon : 'icofont-cart-alt ',
      Enrolled : 250,
      LikeIcon : 'icofont-heart-alt ',
      Liked : 260,
      Rate : 3
    },
    
    {
      Img : "https://images.idgesg.net/images/article/2019/08/cso_nw_promoting_an_idea_lightbulb_technology_gear_by_natali_mis_gettyimages-1024234886_2400x1600-100808095-large.jpg",
      Price: 24,
      Rating : 3,
      RatingNumber : 240,
      Header : 'Header',
      Description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut quisquam,',
      EnrollIcon : 'icofont-cart-alt ',
      Enrolled : 250,
      LikeIcon : 'icofont-heart-alt ',
      Liked : 260,
      Rate : 3
    },
    
    {
      Img : "https://images.idgesg.net/images/article/2019/08/cso_nw_promoting_an_idea_lightbulb_technology_gear_by_natali_mis_gettyimages-1024234886_2400x1600-100808095-large.jpg",
      Price: 24,
      Rating : 3,
      RatingNumber : 240,
      Header : 'Header',
      Description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut quisquam,',
      EnrollIcon : 'icofont-cart-alt ',
      Enrolled : 250,
      LikeIcon : 'icofont-heart-alt ',
      Liked : 260,
      Rate : 3
    },
    
    {
      Img : "https://images.idgesg.net/images/article/2019/08/cso_nw_promoting_an_idea_lightbulb_technology_gear_by_natali_mis_gettyimages-1024234886_2400x1600-100808095-large.jpg",
      Price: 24,
      Rating : 3,
      RatingNumber : 240,
      Header : 'Header',
      Description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ut quisquam,',
      EnrollIcon : 'icofont-cart-alt ',
      Enrolled : 250,
      LikeIcon : 'icofont-heart-alt ',
      Liked : 260,
      Rate : 3
    },
    
    
  ]
  starRating = 0; 

}
