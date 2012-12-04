task :default => :compile

desc "Compile Assets"
task :compile do
  puts "Compile:"

  puts "  haml"
  system("haml index.haml > index.html")

  puts "  coffee"
  system("coffee -c assets/advent.coffee")

  puts "  scss"
  system("scss assets/advent.{scss,css}")
end
