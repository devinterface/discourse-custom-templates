This repository is used for override some Discourse templates.

EXAMPLE TEMPLATE FILE:

If you want to override a Discourse template in the path "app/assets/javascripts/discourse/app/raw-templates/list/activity-column.hbr" you have to create the same path of folders in the main folder, but without the "app" folder between "discourse" folder and "raw-templates" folder. Then restart the server with command "d/rails s" and the new template will be ok.

EXAMPLE CONFIG FILE:

If you want to override a Discourse config.yml file you have to follow the same step and create the same path of folders, and remember that the config.yml file need all the configurations of the original config.yml file. So i suggest to copy the entire original file and modify only the parts that you need
