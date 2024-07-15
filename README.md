# Github Page
Modular Static HTML pages rendered using;
- Jekyll (Ruby)
- HTML5
- CSS3
- Javascript (es.6+ modules injection)

# Structure/ Boilerplate
├─ _config.yml <br>
├─ README.md <br>
├─ CHANGELOGS.md <br>
├─ favicon.ico <br>
├─ index.html <br>
├─ 404.html <br>
├─ _layouts <br>
&nbsp;&nbsp;├─ layout1.html <br>
├─ modules <br>
&nbsp;&nbsp;├─ module1.html <br>
&nbsp;&nbsp;├─ module2.html <br>
&nbsp;&nbsp;├─ modulex.html <br>
... <br>
├─ libraries <br>
&nbsp;&nbsp;├─ css <br>
&nbsp;&nbsp;├─ js <br>
&nbsp;&nbsp;├─ mjs <br>
&nbsp;&nbsp;├─ etc <br>
... <br>
├─ pages <br>
&nbsp;&nbsp;├─ page1  <br>
&nbsp;&nbsp;&nbsp;&nbsp; ├─ index.html  <br>
... <br>
├─ images <br>


# Quick start on Localhost
- Ensure **Ruby** and **Jekyll** was installed on local machine 
- clone this repository into local machine i.e. ~/repo/... . Make sure you got the same structure as a boilerplate
- open `terminal`, then start jekyll server using `bundle exec jekyll serve`
- view page on `http://localhost:4000`
- try rebuild Gemfile and Gemfile.lock with `jekyll new _path_` if files on the repositories can not run

# Config on Github
- rename `baseurl: /site` in `_config.yml` to your repository's name i.e. `baseurl: /your_repo`
- Github page does not required Jekyll build. (We could host the code as described following boilerplate)

## See also
- [Setup Github Page](https://docs.github.com/en/pages/quickstart)
- [Jekyll Pre-requisite](https://jekyllrb.com/docs/installation/)
- [Jekyll Installation](https://jekyllrb.com/docs/)
- [Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Install Ruby environment manager(rbenv) on OSX, A Java geek, Nicolas Fränkel's blog](https://blog.frankel.ch/running-jekyll-mac/)


## Visit an example on 
[https://aimliu2.github.io/site/](https://aimliu2.github.io/site/)
