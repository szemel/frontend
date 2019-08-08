import {AuthService} from './auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'fronty2';
  jsonik: object = {
    image: 'https://theswfl100.com/wp-content/uploads/sites/28/2019/03/web1_02b-IFAS-Financial-Impact.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros eros, tristique eget sapien eu, volutpat consequat libero. Pellentesque dui risus, sagittis ac erat ut, pretium dapibus ex. Vivamus egestas sem vitae convallis volutpat. Integer iaculis viverra metus, at ullamcorper nisi molestie nec. Cras eu interdum neque. Nullam faucibus consectetur dui in maximus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ullamcorper mattis sapien. Mauris quis ullamcorper massa. Nulla tincidunt elementum erat eu condimentum. Vivamus feugiat est eu est mollis, non euismod quam eleifend. Pellentesque rhoncus eleifend ipsum quis molestie. Nulla egestas id dui sed elementum. Suspendisse ullamcorper justo a tincidunt accumsan. Vestibulum malesuada sit amet mi porttitor bibendum. Aenean semper efficitur massa, non tristique massa tempus at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ultricies, diam vitae dictum tristique, nulla leo dignissim ipsum, non tempus neque quam et orci. Praesent vel orci ante. Fusce cursus efficitur eros at dapibus. In eu velit et lorem mattis mattis in sed enim. Fusce vel odio ornare, lobortis magna et, ultrices leo. Maecenas vulputate metus ex, vel faucibus odio tempor id. Donec in mattis nulla, vitae porttitor nisi. Donec mattis sapien a odio facilisis dictum. Nam dapibus odio sed ex porta, ac mollis elit laoreet. Aenean ultrices ipsum ut nunc tempor, at fringilla nisl aliquam. Morbi id sem ac erat consequat consectetur. Aliquam hendrerit auctor mauris, sed iaculis leo molestie vel. Pellentesque aliquet tortor quis est semper tincidunt. Morbi nec nibh non sapien sodales rutrum eget at quam. Cras sit amet nisi vitae eros lacinia auctor. Vivamus porttitor, tellus ac tincidunt scelerisque, dolor arcu vulputate neque, quis ullamcorper nibh massa id leo. Donec volutpat a nulla sit amet suscipit. Maecenas eu dui erat. Etiam nec imperdiet urna, at facilisis sapien. Vivamus aliquet auctor augue quis sollicitudin. Donec consequat justo quis volutpat vulputate. Aliquam ligula mauris, pellentesque sit amet sagittis a, blandit vel enim. Praesent et libero sed lectus blandit volutpat sed non orci. Aliquam erat volutpat. Vestibulum diam arcu, vehicula eu justo in, condimentum accumsan diam. Morbi auctor nulla eget finibus tristique. Nunc sed tortor blandit, posuere nunc quis, vestibulum ex. Sed semper feugiat mi, posuere vestibulum lorem vestibulum id. Donec eleifend, augue at dictum tempus, nunc nunc tincidunt lectus, id facilisis mauris lacus a ligula. Aliquam eget pulvinar quam. Quisque vel dignissim purus, a pharetra tellus. Sed ut arcu nunc. Morbi sagittis justo et turpis sagittis, id dapibus risus pretium. Cras auctor sapien sit amet justo gravida, vel ornare odio lacinia. Morbi vitae justo magna. Sed ullamcorper, arcu sit amet aliquet lobortis, leo est mattis dolor, quis sagittis est nunc in tortor. Curabitur sit amet ipsum commodo, imperdiet lorem a, euismod purus. Etiam a velit ac odio maximus pretium in id leo.',
    title: 'Lorem ipsum dolor sit amet',
    articleURL: 'https://bluemedia.pl'
  };
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.populate();
  }
}
