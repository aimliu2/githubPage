# Github Page
Modular Static HTML pages rendered using;
- Jekyll (Ruby)
- HTML5
- CSS3
- Javascript (es.6+ modules) with script injection

# Structure/ Boilerplate
📁─ _layouts <br>
&nbsp;&nbsp;📂─ default.html <br>
&nbsp;&nbsp;📂─ layout1.html <br>
... <br>
📁─ images <br>
... <br>
📁─ libraries <br>
&nbsp;&nbsp;📂─ css <br>
&nbsp;&nbsp;📂─ js <br>
&nbsp;&nbsp;📂─ mjs <br>
&nbsp;&nbsp;📂─ etc <br>
... <br>
📁─ modules <br>
&nbsp;&nbsp;📂─ module1.html <br>
&nbsp;&nbsp;📂─ module2.html <br>
&nbsp;&nbsp;📂─ modulex.html <br>
... <br>
📁─ pages <br>
&nbsp;&nbsp;📂─ page1  <br>
&nbsp;&nbsp;&nbsp;&nbsp; 📂─ index.html  <br>
</>─ _config.yml <br>
</>─ 404.html <br>
</>─ CHANGELOGS.md <br>
🎃─ favicon.ico <br>
💎─ Gemfile <br>
💎─ Gemfile.lock <br>
</> ─ index.html <br>
🔑─ LICENSE <br>
📁─ README.md <br>

# Quick start
- Ensure **Ruby** and **Jekyll** was installed on local machine 
- clone this repository into local machine. Make sure you got the same structure as a boilerplate
- open `terminal`, then start jekyll server using `bundle exec jekyll serve`
- view page on `http://localhost:4000`
- try rebuild `Gemfile` and `Gemfile.lock` with if files on the repositories can not run

# Building site
- **</> ─ index.html** is set as the landing page. We may build one-page site by building modules then insert into **</> ─ index.html**
- created subpages in **pages** then navigate using relative url i.e. `<a href="pages/StartPage/">Start Page</a>`

# Configuration on Github
- rename `baseurl: /site` in `_config.yml` to your repository's name i.e. `baseurl: /your_repo`
- Github page does not required `Jekyll build`



## See also
- [Setup Github Page](https://docs.github.com/en/pages/quickstart)
- [Jekyll Pre-requisite](https://jekyllrb.com/docs/installation/)
- [Jekyll Installation](https://jekyllrb.com/docs/)
- [Install Ruby](https://www.ruby-lang.org/en/documentation/installation/)
- [Install Ruby environment manager(rbenv) on OSX, A Java geek, Nicolas Fränkel's blog](https://blog.frankel.ch/running-jekyll-mac/)


## Visit an example on 
[https://aimliu2.github.io/site/](https://aimliu2.github.io/site/)
