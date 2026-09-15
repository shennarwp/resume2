# Extends the stock Node dev image with the OpenCode CLI baked in, so agent
# work inside the container has the same loop as the host. Auth is mounted
# read-only at creation (see devcontainer.json) so nothing secret is baked
# into the image. Note: this image only ships user `node`, hence HOME below.
FROM mcr.microsoft.com/devcontainers/javascript-node:24-bookworm

USER node
RUN export HOME=/home/node \
    && mkdir -p $HOME/.local/share/opencode \
    && curl -fsSL -o /tmp/opencode-install.sh https://opencode.ai/install \
    && bash /tmp/opencode-install.sh \
    && rm /tmp/opencode-install.sh \
    && test -x $HOME/.opencode/bin/opencode
ENV PATH="/home/node/.opencode/bin:${PATH}"
