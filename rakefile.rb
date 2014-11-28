desc "run server"
task :run do
  system "node bin/log.io-server"
end

desc "edit conf file"
task :edit do
  system "$EDITOR ~/.log.io/web_server.conf"
end