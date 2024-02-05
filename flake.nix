{
  description = "advent of code development flake";

  inputs = {
    nixpkgs.url = "github:/nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells = with pkgs; {
          nodejs = mkShell {
            buildInputs = [
              nodejs
              nodePackages.typescript
              nodePackages.typescript-language-server
            ];
          };
        };
      }
    );
}
