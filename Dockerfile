FROM 			lipanski/docker-static-website:latest
LABEL           maintainer="Shenna Risqianto Wilfred Piri <shennawew@outlook.com>"

COPY            ./src .
CMD ["/busybox-httpd", "-f", "-v", "-p", "80", "-c", "httpd.conf"]
