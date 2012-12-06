task :default => :compile

desc "Compile Assets"
task :compile do
  require "yaml"
  require "json"

  puts "Compile:"

  puts "  haml   > html"
  system("haml index.haml > index.html")

  puts "  coffee > js"
  system("coffee -c assets/advent.coffee")

  puts "  scss   > css"
  system("scss assets/advent.{scss,css}")

  puts "  yaml   > json"
  entries = YAML.load(open("assets/entries.yml"))
  File.write(
    "assets/entries.js",
    entries.map { |array| key, value = array; "var #{key} = #{value.to_json}" }.join("\n"),
    :encoding => Encoding::UTF_8
  )

  puts "Done!"
end
