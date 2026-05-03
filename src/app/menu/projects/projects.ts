import { Component } from '@angular/core';

interface Project {
  title: string;
  image: string;
  liveLink: string;
  sourceLink: string;
  technologies: string[];
  description: string;
}

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      title: 'To-do list',
      image: 'assets/logos/to_do_list.jpg',
      liveLink: 'https://todo-list-sunilpoudel.netlify.app/',
      sourceLink: 'https://github.com/sunil-poudel/to-do-list',
      technologies: ['Angular'],
      description: 'Manage the tasks!'
    },
    {
      title: 'Paste and share',
      image: 'assets/logos/paste-and-share.png',
      liveLink: 'https://paste-and-share-0ler.onrender.com/',
      sourceLink: 'https://github.com/sunil-poudel/paste-and-share',
      technologies: ['Spring Boot'],
      description: 'Paste anything and share the link with your friends for quick viewing.'
    },
    {
      title: 'Url shortener',
      image: 'assets/logos/url-shortener.png',
      liveLink: 'https://url-shortener-1-doni.onrender.com/',
      sourceLink: 'https://github.com/sunil-poudel/url-shortener',
      technologies: ['Spring Boot'],
      description: 'Shorten your links for quick sharing.'
    },
    {
      title: 'Chat with me',
      image: 'assets/logos/chat-with-me.png',
      liveLink: 'http://chat-with-me-env.eba-ku8wk7zp.us-east-1.elasticbeanstalk.com/',
      sourceLink: 'https://github.com/sunil-poudel/chat-with-me',
      technologies: ['Spring Boot', 'Angular '],
      description: 'Simple chatbot app powered by Spring Boot and Angular'
    },
    {
      title: 'Email verification service',
      image: 'assets/logos/email-verification-service.png',
      liveLink: 'https://spring-boot-email-verification.onrender.com/',
      sourceLink: 'https://github.com/sunil-poudel/spring-boot-email-verification',
      technologies: ['Spring Boot'],
      description: 'Email verification service!'
    }
  ];

  currentIndex = 0;

  nextProject() {
    if (this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the first
    }
  }

  prevProject() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.projects.length - 1; // Loop back to the last
    }
  }
}
