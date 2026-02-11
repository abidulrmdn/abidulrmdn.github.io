# How to run this site locally

This is a [Jekyll](https://jekyllrb.com/) site (GitHub Pages–compatible). Follow these steps to build and serve it on your machine.

## Prerequisites

- **Ruby** (2.6 or newer; check with `ruby -v`)
- **Bundler** — the project is locked to Bundler 2.3.23 (see `Gemfile.lock`). If `bundle exec` fails with a “Could not find 'bundler' (2.3.23)” error, install that version:

  ```bash
  gem install bundler:2.3.23
  ```

  Or install into the project only (no system-wide install):

  ```bash
  mkdir -p vendor/bundle
  gem install bundler:2.3.23 --install-dir ./vendor/bundle
  ```

  Then run Jekyll with the project’s Bundler:

  ```bash
  GEM_HOME=./vendor/bundle GEM_PATH=./vendor/bundle bundle _2.3.23_ exec jekyll serve
  ```

## Steps

1. **Go to the project directory**

   ```bash
   cd /path/to/abidulrmdn.github.io
   ```

2. **Install dependencies**

   ```bash
   bundle install
   ```

   (If you use the `vendor/bundle` setup above, prefix with `GEM_HOME=./vendor/bundle GEM_PATH=./vendor/bundle bundle _2.3.23_ install`.)

3. **Build and serve the site**

   ```bash
   bundle exec jekyll serve
   ```

   Or, with the project-local Bundler:

   ```bash
   GEM_HOME=./vendor/bundle GEM_PATH=./vendor/bundle bundle _2.3.23_ exec jekyll serve
   ```

4. **Open in a browser**

   Go to **http://localhost:4000**. The server will watch for file changes and regenerate the site when you edit content.

## Optional

- **Incremental build** (faster rebuilds):  
  `bundle exec jekyll serve --incremental`
- **Custom host/port**:  
  `bundle exec jekyll serve --host 0.0.0.0 --port 4001`
- **Production build only** (output in `_site/`):  
  `bundle exec jekyll build`

More details: [Jekyll documentation](https://jekyllrb.com/docs/).
