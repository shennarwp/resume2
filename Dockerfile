FROM            lipanski/docker-static-website:2.4.0
LABEL           maintainer="Shenna Risqianto Wilfred Piri <shennawew@outlook.com>"
WORKDIR         /home/static
COPY            ./src .
CMD             ["/busybox-httpd", "-f", "-v", "-p", "80", "-c", "httpd.conf"]
