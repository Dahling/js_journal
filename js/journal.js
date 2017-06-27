function Entry (title, entry) {
  this.title = title;
  this.entry = entry;
}

Entry.prototype.wordCount = function(entry) {
  return entry.split(/\s+/).length - 1;
};

exports.entryModule = Entry;
