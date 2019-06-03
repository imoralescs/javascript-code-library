## Permission to your script
```
chmod +x ~/Documents/javascript-code-library/remove_node_module.sh
```

## Remove all node_module folders recursively

```
find . -name "node_modules" -exec rm -rf '{}' +
```
