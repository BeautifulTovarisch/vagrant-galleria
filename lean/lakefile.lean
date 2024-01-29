import Lake
open Lake DSL

package «template» where
  -- add package configuration options here

lean_lib «Template» where
  -- add library configuration options here

@[default_target]
lean_exe «template» where
  root := `Main
