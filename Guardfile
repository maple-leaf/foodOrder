# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'livereload' do
  #host: '192.168.1.242'
  watch(%r{views/.+\.(erb|haml|slim)$})
  watch(%r{helpers/.+\.rb})
  watch(%r{assets/.+/.+\.(css|js|html)})
  watch(%r{config/locales/.+\.yml})
  # Rails Assets Pipeline
  watch(%r{(/assets/\w+/(.+\.(css|js|html))).*}) { |m| "/assets/#{m[3]}" }
  watch(%r{.+\.(html)})
end
