import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../../core/services/auth.service";
import { PostsService } from "../../../core/services/posts.service";
import { ThemesService } from "../../../core/services/themes.service";
import { Post } from "../../../models/post.model";
import { Theme } from "../../../models/theme.model";
import { PostItem } from "../../posts/post-item/post-item";
import { ThemeItem } from "../theme-item/theme-item";


@Component({
  selector: 'app-theme-board',
  imports: [CommonModule, RouterLink, ThemeItem, PostItem],
  templateUrl: './theme-board.html',
  styleUrl: './theme-board.css'
})
export class ThemeBoard {
  private authService = inject(AuthService);
  readonly isLoggedIn = this.authService.isLoggedIn;

  themeId: string = '5fa64a9f2183ce1728ff371a';
  themes$: Observable<Theme[]>;
  posts$: Observable<Post[]>;

  constructor(
    private themeService: ThemesService,
    private postsService: PostsService) {
  
    this.themes$ = this.themeService.getThemes();
    this.posts$ = this.postsService.getPosts();
  }
}