配置http代理

git config --global http.proxy 127.0.0.1:7890

git config --global https.proxy 127.0.0.1:7890


取消代理命令

git config --global --unset http.proxy

git config --global --unset https.proxy
