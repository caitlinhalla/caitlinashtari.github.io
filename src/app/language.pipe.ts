import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: "language",
  pure: false
})
export class LanguagePipe implements PipeTransform {

  transform(input: Project[], desiredLanguage) {
    var output: Project[] = [];
    if(desiredLanguage === "rubyProjects"){
      for(var i = 0; i < input.length; i++){
        if (input[i].languages[0] === "ruby" ) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredLanguage === "javaScriptProjects"){
      for(var i = 0; i < input.length; i++){
        if(input[i].languages[0] === "javascript"){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }




  }

}
