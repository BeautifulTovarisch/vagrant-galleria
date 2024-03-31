# LWARP Site Generation

This module provides a minimal setup required to use the [lwarp](https://bdtechconcepts.com/LaTeX-HTML-Converter-The-Lwarp-package.html#autosec-155)
LaTeX to HTML converter. The appropriate dependencies are installed during the
Vagrant box initialization.

## Contents

The project contains the following basic structure:

```bash
src/
├── subfolder
│   ├── example.tex
│   └── graph.tex
└── tutorial.tex
```

which demonstates the use of the `standalone` package to import the `example`
source file which in turn imports a `tikz` diagram found in `graph.tex`

## Compiling the Example

Due to the lwarp workflow, many intermediate files are generated at each step
of the compilation process. Therefore it is recommended to copy the source tex
files into another directory before building the website.

```bash
mkdir site

cp -r src/* site
```

After this initial setup, `pdflatex` is used to initially compile the document
and provide `lwarp` with the necessary metafiles to produce an HTML website.

```bash
cd site

pdflatex tutorial.tex
```

The next step is to use `lwarpmk` to build the index, image, and HTML files.

```bash
# still in the site directory

lwarpmk htmlindex
lwarpmk limages
lwarpmk html
```

opening `tutorial.html` in a browser render the full site and navigation menu.

If the `tikz` or mathematics is not displaying properly try:

```bash
lwarpmk limages
lwarpmk html
```

and refreshing the site.

## References

- [lwarp main page](https://bdtechconcepts.com/LaTeX-HTML-Converter-The-Lwarp-package.html)
- [lwarp documentation](https://bdtechconcepts.com/portfolio/lwarp.pdf)
- [Overleaf mult-ifile latex tutorial](https://www.overleaf.com/learn/latex/Multi-file_LaTeX_projects)
